import { css, keyframes /*memoizeStyle*/ } from '../../lib/theming/Emotion';
import { Theme } from '../../lib/theming/Theme';
import { shift } from '../../lib/styles/DimensionFunctions';
import { resetText } from '../../lib/styles/Mixins';
import { isIE11, isEdge } from '../../lib/utils';

import { InputProps, InputState } from './Input';

export interface InputStylesProps {
  t: Theme;
  size: InputProps['size'];
  borderless: InputProps['borderless'];
  warning: InputProps['warning'];
  error: InputProps['error'];
  focus: InputState['focused'];
  disabled: InputProps['disabled'];
}

const getRootBackground = (p: InputStylesProps): string => {
  const { t, disabled } = p;
  switch (true) {
    case disabled:
      return t.inputDisabledBg;
    default:
      return t.inputBg;
  }
};

const getRootBoxShadow = (p: InputStylesProps): string => {
  const { t, borderless, focus, error, warning, disabled } = p;
  switch (true) {
    case borderless:
    case disabled:
      return 'none';
    case (error || warning) && (isIE11 || isEdge):
      return 'none';
    case error:
      return `0 0 0 ${t.inputOutlineWidth} ${t.inputBorderColorError}`;
    case warning:
      return `0 0 0 ${t.inputOutlineWidth} ${t.inputBorderColorWarning}`;
    case focus && (isIE11 || isEdge):
      return 'none';
    case focus:
      return t.inputFocusShadow;
    default:
      return t.inputShadow;
  }
};

const getRootBorderColor = (p: InputStylesProps): string => {
  const { t, borderless, focus, error, warning, disabled } = p;
  switch (true) {
    case borderless:
      return 'transparent';
    case disabled:
      return t.inputDisabledBorderColor;
    case error:
      return t.inputBorderColorError;
    case warning:
      return t.inputBorderColorWarning;
    case focus:
      return t.inputBorderColorFocus;
    default:
      return `${t.inputBorderTopColor} ${t.inputBorderColor} ${t.inputBorderColor}`;
  }
};

const getRootOutline = (p: InputStylesProps): string => {
  const { t, focus, warning, error } = p;
  switch (true) {
    case error && (isIE11 || isEdge):
      return `${t.inputBorderWidth} solid ${t.inputBorderColorError}`;
    case warning && (isIE11 || isEdge):
      return `${t.inputBorderWidth} solid ${t.inputBorderColorWarning}`;
    case focus && (isIE11 || isEdge):
      return `${t.inputOutlineWidth} solid ${t.inputFocusOutline}`;
    case focus:
    default:
      return 'none';
  }
};

const getRootZIndex = (p: InputStylesProps): string => {
  const { focus, error, warning } = p;
  switch (true) {
    case focus:
    case error:
    case warning:
      return '2';
    default:
      return 'inherit';
  }
};

const getRootFontSize = (p: InputStylesProps): string => {
  const { t, size } = p;
  switch (size) {
    case 'large':
      return t.inputFontSizeLarge;
    case 'medium':
      return t.inputFontSizeMedium;
    case 'small':
    default:
      return t.inputFontSizeSmall;
  }
};

const getRootLineHeight = (p: InputStylesProps): string => {
  const { t, size } = p;

  if (isIE11 || isEdge) {
    return 'normal';
  }

  switch (size) {
    case 'large':
      return t.inputLineHeightLarge;
    case 'medium':
      return t.inputLineHeightMedium;
    case 'small':
    default:
      return t.inputLineHeightSmall;
  }
};

const getRootHeight = (p: InputStylesProps): string => {
  const { t, size } = p;
  switch (size) {
    case 'large':
      return t.inputHeightLarge;
    case 'medium':
      return t.inputHeightMedium;
    case 'small':
    default:
      return t.inputHeightSmall;
  }
};

const getRootPaddingY = (p: InputStylesProps): string => {
  const { t, size } = p;
  switch (size) {
    case 'large':
      return t.inputPaddingYLarge;
    case 'medium':
      return t.inputPaddingYMedium;
    case 'small':
    default:
      return t.inputPaddingYSmall;
  }
};

const getRootPaddingX = (p: InputStylesProps): string => {
  const { t, size } = p;
  switch (size) {
    case 'large':
      return t.inputPaddingXLarge;
    case 'medium':
      return t.inputPaddingXMedium;
    case 'small':
    default:
      return t.inputPaddingXSmall;
  }
};

const getRootPaddingTop = (p: InputStylesProps): string => {
  let paddingTop = getRootPaddingY(p);

  if (p.size === 'large') {
    paddingTop = shift(paddingTop, '-1');
  }
  if (isIE11 || isEdge) {
    paddingTop = shift(paddingTop, '-1');
  }

  return paddingTop;
};

const getRootPaddingBottom = (p: InputStylesProps): string => {
  let paddingBottom = getRootPaddingY(p);

  if (p.size === 'large') {
    paddingBottom = shift(paddingBottom, '1');
  }
  if (isIE11 || isEdge) {
    paddingBottom = shift(paddingBottom, '1');
  }

  return paddingBottom;
};

const getRootBorderRadius = (p: InputStylesProps): string => {
  const { t, size } = p;
  switch (size) {
    case 'large':
      return t.inputBorderRadiusLarge;
    case 'medium':
      return t.inputBorderRadiusMedium;
    case 'small':
    default:
      return t.inputBorderRadiusSmall;
  }
};

const getPlaceholderColor = (p: InputStylesProps): string => {
  const { t, focus } = p;
  return focus ? t.inputPlaceholderColorLight : t.inputPlaceholderColor;
};

const getInputColor = (p: InputStylesProps): string => {
  const { t, disabled } = p;
  return disabled ? t.inputTextColorDisabled : t.inputTextColor;
};

const getInputPointerEvents = (p: InputStylesProps): string => {
  return p.disabled ? 'none' : 'inherit';
};

const getIconWidth = (p: InputStylesProps): string => {
  const { t, size } = p;
  switch (size) {
    case 'large':
      return t.inputIconSizeLarge;
    case 'medium':
      return t.inputIconSizeMedium;
    case 'small':
    default:
      return t.inputIconSizeSmall;
  }
};

const getIconPaddingX = (p: InputStylesProps): string => {
  const { t, size } = p;
  switch (size) {
    case 'large':
      return t.inputIconGapLarge;
    case 'medium':
      return t.inputIconGapMedium;
    case 'small':
    default:
      return t.inputIconGapSmall;
  }
};

const getIconCursor = (p: InputStylesProps): string => {
  return p.disabled ? 'default' : 'text';
};

const styles = {
  wrapper() {
    return css`
      align-items: center;
      display: flex;
      margin: 0;
      min-width: 0;
      overflow: hidden;
      position: relative;
      text-overflow: clip;
      white-space: nowrap;
      width: 100%;

      &::before {
        content: '\\A0';
        display: inline-block;
        width: 0;
      }
    `;
  },

  root(p: InputStylesProps) {
    const { t } = p;
    return css`
      ${resetText()};

      align-items: center;
      background-clip: padding-box;
      background-color: ${getRootBackground(p)};
      border-width: ${t.inputBorderWidth};
      border-style: solid;
      border-color: ${getRootBorderColor(p)};
      box-shadow: ${getRootBoxShadow(p)};
      box-sizing: border-box;
      color: ${t.inputColor};
      cursor: text;
      display: inline-flex;
      outline: ${getRootOutline(p)};
      position: relative;
      width: ${t.inputWidth};
      z-index: ${getRootZIndex(p)};

      font-size: ${getRootFontSize(p)};
      line-height: ${getRootLineHeight(p)};
      height: ${getRootHeight(p)};
      padding-top: ${getRootPaddingTop(p)};
      padding-bottom: ${getRootPaddingBottom(p)};
      padding-left: ${getRootPaddingX(p)};
      padding-right: ${getRootPaddingX(p)};
      border-radius: ${getRootBorderRadius(p)};

      & * {
        box-sizing: border-box;
      }
    `;
  },

  placeholder(p: InputStylesProps) {
    return css`
      -ms-user-select: none;
      color: ${getPlaceholderColor(p)};
      cursor: text;
      font-size: inherit;
      height: 100%;
      left: 0;
      overflow: hidden;
      pointer-events: none;
      position: absolute;
      top: 0;
      user-select: none;
      white-space: nowrap;
      width: 100%;
    `;
  },

  input(p: InputStylesProps) {
    return css`
      -webkit-appearance: none;
      background: transparent;
      border: 0 none;
      color: ${getInputColor(p)};
      font: inherit;
      line-height: inherit;
      margin: 0;
      outline: none;
      padding: 0;
      text-overflow: clip;
      white-space: nowrap;
      width: 100%;
      pointer-events: ${getInputPointerEvents(p)};

      /* fix text color in safari */
      -webkit-text-fill-color: currentcolor;

      &:-moz-placeholder {
        opacity: 1;
      }
      &::-moz-placeholder {
        opacity: 1;
      }
      &::-ms-clear {
        display: none;
      }
      &:-moz-placeholder {
        color: ${getPlaceholderColor(p)};
        -webkit-text-fill-color: ${getPlaceholderColor(p)};
      }
      &::-moz-placeholder {
        color: ${getPlaceholderColor(p)};
        -webkit-text-fill-color: ${getPlaceholderColor(p)};
      }
      &::placeholder {
        color: ${getPlaceholderColor(p)};
        -webkit-text-fill-color: ${getPlaceholderColor(p)};
      }
    `;
  },

  blink(t: Theme) {
    const blinkAnimation = keyframes`
    0% {
      background-color: ${t.inputBlinkColor};
    }
  `;
    return css`
      animation: ${blinkAnimation} 0.15s ease-in;
    `;
  },

  prefix(t: Theme) {
    return css`
      color: ${t.inputPlaceholderColor};
    `;
  },

  suffix(t: Theme) {
    return css`
      color: ${t.inputPlaceholderColor};
    `;
  },

  sideContainer() {
    return css`
      align-items: center;
      display: flex;
      flex-shrink: 0;
      height: 100%;

      &::before {
        content: '\\a0';
        display: inline-block;
        width: 0;
      }
    `;
  },

  rightContainer() {
    return css`
      justify-self: flex-end;
      margin: 0 0 0 auto;
      padding-left: 0;
    `;
  },

  icon(p: InputStylesProps) {
    const { t } = p;
    return css`
      color: ${t.inputIconColor};
      width: ${getIconWidth(p)}
      flex-shrink: 0;
      cursor: ${getIconCursor(p)};
      z-index: 2;
      text-align: center;
      box-sizing: content-box !important;
    `;
  },

  leftIcon(p: InputStylesProps) {
    return css`
      padding-right: ${getIconPaddingX(p)};
    `;
  },

  rightIcon(p: InputStylesProps) {
    return css`
      padding-left: ${getIconPaddingX(p)};
    `;
  },
};

// export const jsStyles = memoizeStyle(styles);
export const jsStyles = styles;
