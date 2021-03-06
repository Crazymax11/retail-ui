import React from 'react';
import cn from 'classnames';

import { Override } from '../../typings/utility-types';

import { jsStyles } from './Center.styles';

export type HorizontalAlign = 'left' | 'center' | 'right';

export type CenterProps = Override<
  React.HTMLAttributes<HTMLDivElement>,
  {
    /**
     * Горизонтальное выравнивание контента.
     */
    align?: HorizontalAlign;

    /**
     * **Используй с осторожностью!**
     * Дополнительные стили
     */
    style?: React.CSSProperties;
  }
>;

/**
 * Контейнер для вертикального центрирования. В компонент можно передавать
 * свойства как в любой *div* (кроме `className`)
 */
export class Center extends React.Component<CenterProps> {
  public static __KONTUR_REACT_UI__ = 'Center';

  public static defaultProps = {
    align: 'center',
  };

  public render(): JSX.Element {
    const { align, children, ...rest } = this.props;

    return (
      <div
        className={cn({
          [jsStyles.root()]: true,
          [jsStyles.rootAlignLeft()]: align === 'left',
          [jsStyles.rootAlignRight()]: align === 'right',
        })}
        {...rest}
      >
        <span className={jsStyles.spring()} />
        <span className={jsStyles.container()}>{children}</span>
      </div>
    );
  }
}
