import React, {FC, ReactNode} from 'react'

import {LinkControl, LinkControlProps, Lnk, styled} from '@qiwi/pijma-core'

import {MenuItem} from '../menu'

export interface MenuLinkProps {
  title: string
  notes?: string
  icon?: ReactNode
  submenu?: boolean
  active?: boolean
  tabIndex?: number
  href?: LinkControlProps['href']
  target?: LinkControlProps['target']
  download?: LinkControlProps['download']
  rel?: LinkControlProps['rel']
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

const MenuItemLink = styled(Lnk)().withComponent(MenuItem)

export const MenuLink: FC<MenuLinkProps> = (props) => (
  <LinkControl
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <MenuItemLink
        as={props.href ? 'a' : undefined}
        notes={props.notes}
        icon={props.icon}
        submenu={props.submenu}
        active={props.active ? props.active : renderProps.active}
        hover={renderProps.hover}
        focus={renderProps.focus}
        tabIndex={props.tabIndex}
        href={props.href}
        title={props.title}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        target={props.target}
        download={props.download}
      />
    )}
  />
)
