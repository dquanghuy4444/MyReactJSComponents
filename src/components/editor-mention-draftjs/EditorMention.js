import React, {
  MouseEvent,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {defaultSuggestionsFilter} from '@draft-js-plugins/mention';
import editorStyles from './CustomMentionEditor.module.css';
import mentionsStyles from './MentionsStyles.module.css';
import mentions from './Mentions';

const positionSuggestions = ({
  props,
}) => {
  let transform;
  let transition;

  if (props.open && props.suggestions.length > 0) {
    transform = 'scaleY(1)';
    transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
  } else if (props.open) {
    transform = 'scaleY(0)';
    transition = 'all 0.25s cubic-bezier(.3,1,.2,1)';
  }

  return {
    transform,
    transition,
  };
};

function Entry(props) {
  const {
    mention,
    theme,
    searchValue, 
    isFocused, 
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <div className={theme?.mentionSuggestionsEntryContainer}>
        <div className={theme?.mentionSuggestionsEntryContainerLeft}>
          <img
            src={mention.avatar}
            className={theme?.mentionSuggestionsEntryAvatar}
            role="presentation"
            alt=""
          />
        </div>

        <div className={theme?.mentionSuggestionsEntryContainerRight}>
          <div className={theme?.mentionSuggestionsEntryText}>
            {mention.name}
          </div>

          <div className={theme?.mentionSuggestionsEntryTitle}>
            {mention.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomMentionEditor() {
  const ref = useRef(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      theme: mentionsStyles,
      positionSuggestions,
      mentionPrefix: '@',
      supportWhitespace: true,
    });
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onChange = useCallback((_editorState) => {
    setEditorState(_editorState);
  }, []);
  const onOpenChange = useCallback((_open) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  return (
    <div
      className={editorStyles.editor}
      onClick={() => {
        ref.current.focus();
      }}
    >
      <Editor
        editorKey={'editor'}
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={ref}
      />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        onAddMention={() => {
          // get the mention object selected
        }}
        entryComponent={Entry}
      />
    </div>
  );
}