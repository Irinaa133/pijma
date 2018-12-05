import React, {Component} from 'react'

import {StarIcon} from '@qiwi/pijma-media'
import {Button, RadioField, CheckboxField} from '@qiwi/pijma-mobile'

interface State {
  features: string[]
  type: 'submit' | 'button'
  kind: 'brand' | 'simple'
  size: 'accent' | 'normal' | 'minor'
}

export default class ButtonExample extends Component<{}, State> {

  public state: State = {
    features: ['icon', 'text'],
    type: 'button',
    kind: 'brand',
    size: 'accent',
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px', maxWidth: '200px'}}>
            <Button
              type={this.state.type}
              size={this.state.size}
              disabled={this.state.features.includes('disabled')}
              loading={this.state.features.includes('loading')}
              kind={this.state.kind}
              icon={this.state.features.includes('icon') ? <StarIcon/> : undefined}
              text={this.state.features.includes('text') ? (this.state.features.includes('long') ? 'Оплатить без комиссии и без проблем ' : 'Оплатить') : undefined}
            />
          </td>
        </tr>
        <tr>
          <td style={{padding: '10px'}}>
            <RadioField
              options={[{
                label: 'brand',
                value: 'brand',
              }, {
                label: 'simple',
                value: 'simple',
              }]}
              value={this.state.kind}
              onChange={(kind) => this.setState({kind})}
            />
          </td>
        </tr>
        <td style={{padding: '10px', verticalAlign: 'top'}}>
          <RadioField
            options={[
              {
                label: 'accent',
                value: 'accent',
              }, {
                label: 'normal',
                value: 'normal',
              }, {
                label: 'minor',
                value: 'minor',
              }]}
            value={this.state.size}
            onChange={(size) => this.setState({size})}
          />
        </td>
        <tr>
          <td style={{padding: '10px'}}>
            <CheckboxField
              options={[{
                label: 'disabled',
                value: 'disabled',
              }, {
                label: 'loading',
                value: 'loading',
              }, {
                label: 'icon',
                value: 'icon',
              }, {
                label: 'text',
                value: 'text',
              }, {
                label: 'long',
                value: 'long',
              }]}
              values={this.state.features}
              onChange={(features) => this.setState({features})}
            />
          </td>
        </tr>
        </tbody>
      </table>
    )
  }

}