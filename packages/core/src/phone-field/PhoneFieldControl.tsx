import React, {RefObject} from 'react'
import {findDOMNode} from 'react-dom'

import PhoneFieldControlProps from './PhoneFieldControlProps'
import PhoneFieldControlState from './PhoneFieldControlState'

import Country from './Country'
import CountryCode from './CountryCode'
import {maskArray} from '../mask'

export default class PhoneFieldControl extends React.Component<PhoneFieldControlProps, PhoneFieldControlState> {

  public state: PhoneFieldControlState = {
    value: this.props.value || '',
    focused: false,
    showCountries: false,
    countryCode: this.props.countryFallback || 'RU',
    selectedCountry: null,
  }

  private onCountryEnter: (countryCode: CountryCode) => void = (countryCode) => {
    this.setState({
      selectedCountry: countryCode,
    })
    if (this.props.onCountryEnter) {
      this.props.onCountryEnter(countryCode)
    }
  }

  private onCountryLeave: (countryCode: CountryCode) => void = (countryCode) => {
    this.setState({
      selectedCountry: null,
    })
    if (this.props.onCountryLeave) {
      this.props.onCountryLeave(countryCode)
    }
  }

  private get inputField(): HTMLInputElement | null {
    if (!this.props.inputRef) {
      return null
    }
    const inputRef = this.props.inputRef()
    return inputRef !== null ? findDOMNode(inputRef.current) as HTMLInputElement : null
  }

  private focusInput() {
    if (this.inputField !== null) {
      this.inputField.focus()
    }
  }

  private onFlagClick: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    this.focusInput()
    this.onCountriesShow()
  }

  private onSelectCountry: () => void = () => {
    if (this.props.onSelectCountry) {
      this.props.onSelectCountry()
    }
  }

  private selectCountry: (countryCode: CountryCode) => void = (countryCode) => {
    const {countries} = this.props
    const currentCountry = countries.find(country => country.code === this.state.countryCode)
    const newCountry = countries.find(country => country.code === countryCode)
    const currentCountryMask = currentCountry ? currentCountry.mask.replace(/\D/g, '') : ''
    const newCountryMask = newCountry ? newCountry.mask.replace(/\D/g, '') : ''
    const value = `+${newCountryMask}${this.state.value.replace(/\D/g, '').substr(currentCountryMask.length)}`
    if (this.props.onChange) {
      this.props.onChange(value)
    }
    this.setState({
      countryCode,
      value,
      showCountries: false,
    })
    this.focusInput()
  }

  private onCountriesShow: () => void = () => {
    if (this.props.onCountriesShow) {
      this.props.onCountriesShow()
    }
    this.setState({
      showCountries: true,
    })
  }

  private onCountriesHide: () => void = () => {
    if (this.props.onCountriesHide) {
      this.props.onCountriesHide()
    }
    this.setState({
      showCountries: false,
    })
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value)
    }
    const country = this.getCountryByPhone(e.currentTarget.value)
    this.setState({
      countryCode: country !== undefined ? country.code : this.state.countryCode,
      value: e.currentTarget.value,
    })
  }

  private onFocus: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
      focused: true,
    })
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
      focused: false,
      showCountries: false,
    })
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
    if (!this.state.showCountries && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      event.preventDefault()
      this.onCountriesShow()
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      this.setState({
        selectedCountry: this.nextCountry,
      })
      const countryRef = this.props.optionsRefs.get(this.nextCountry || this.state.countryCode)
      if (!countryRef || !this.props.dropdownRef) {
        return
      }
      const dropdownRef = this.props.dropdownRef()
      if (countryRef && dropdownRef) {
        this.scrollToCountry(dropdownRef, countryRef)
      }
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      this.setState({
        selectedCountry: this.prevCountry,
      })
      const countryRef = this.props.optionsRefs.get(this.prevCountry || this.state.countryCode)
      if (!countryRef || !this.props.dropdownRef) {
        return
      }
      const dropdownRef = this.props.dropdownRef()
      if (countryRef && dropdownRef) {
        this.scrollToCountry(dropdownRef, countryRef)
      }
      return
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      this.selectCountry(this.state.selectedCountry === null ? this.state.countryCode : this.state.selectedCountry)
    }
  }

  private scrollToCountry: (container: RefObject<HTMLDivElement>, country: RefObject<HTMLDivElement>) => void = (container, country) => {
    const containerElement = findDOMNode(container.current) as HTMLDivElement
    const countryElement = findDOMNode(country.current) as HTMLDivElement
    if (!containerElement || !countryElement) {
      return
    }
    const containerBoundingRect = containerElement.getBoundingClientRect()
    const countryBoundingRect = countryElement.getBoundingClientRect()
    const countryOffset = countryElement.offsetTop
    const scrollOffset = containerElement.scrollTop
    const countryHeigher = countryOffset < scrollOffset
    const countryLower = countryOffset + countryBoundingRect.height > scrollOffset + containerBoundingRect.height
    if (countryHeigher) {
      containerElement.scrollTo({top: countryOffset, behavior: 'smooth'})
    }
    if (countryLower) {
      containerElement.scrollTo({top: countryOffset + countryBoundingRect.height - containerBoundingRect.height, behavior: 'smooth'})
    }
  }

  private get nextCountry(): CountryCode | null {
    const {countries} = this.props
    const selectedId: number = countries.findIndex(country => this.state.selectedCountry === null ? country.code === this.state.countryCode : country.code === this.state.selectedCountry)
    const nextId = selectedId + 1 >= countries.length ? 0 : selectedId + 1
    return countries[nextId].code
  }

  private get prevCountry(): CountryCode | null {
    const {countries} = this.props
    const selectedId: number = countries.findIndex(country => this.state.selectedCountry === null ? country.code === this.state.countryCode : country.code === this.state.selectedCountry)
    const nextId = selectedId <= 0 ? countries.length - 1 : selectedId - 1
    return countries[nextId].code
  }

  private onKeyUp: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault()
    }
  }

  private getCountryByPhone(phoneNumber: string): Country | undefined {
    const {countries} = this.props
    const clearPhone = phoneNumber.replace(/\D/g, '')
    const country = countries
      .slice(0)
      .sort((a, b) => b.mask.replace(/\D/g, '').length - a.mask.replace(/\D/g, '').length)
      .find((option) => clearPhone.indexOf(option.mask.replace(/\D/g, '')) === 0)
    return country || countries.find(country => country.code === this.props.countryFallback)
  }

  private getMask: (phoneNumber: string) => maskArray = (phoneNumber = '') => {
    const {countries} = this.props
    const clearMasks = countries
      .map(country => country.mask.slice(1))
      .sort((a, b) => b.length - a.length)
    const mask: maskArray = ['+']
    const clearValue = phoneNumber.replace(/\D/g, '')
    if (clearValue === '') {
      return mask
    }
    const selectedMask = clearMasks.find(clearMask => clearValue.startsWith(clearMask.replace(/\D/g, '').slice(0, clearValue.length)))
    if (!selectedMask) {
      return this.getMask(phoneNumber.slice(0, -1))
    }
    return mask.concat(selectedMask.split('').map(char => char === 'd' ? /\d/ : new RegExp(char)))
  }

  public render() {
    const {countries} = this.props
    return this.props.children({
      focused: this.state.focused,
      countryCode: this.state.countryCode,
      showCountries: this.state.showCountries,
      options: countries,
      value: this.state.value,
      mask: this.getMask,
      onFlagClick: this.onFlagClick,
      selectCountry: this.selectCountry,
      onSelectCountry: this.onSelectCountry,
      onCountriesShow: this.onCountriesShow,
      onCountriesHide: this.onCountriesHide,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      onCountryEnter: this.onCountryEnter,
      onCountryLeave: this.onCountryLeave,
      selected: this.state.selectedCountry,
    })
  }

}
