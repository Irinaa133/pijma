import CountryCode from './CountryCode'

export default interface PhoneFieldControlState {
  value: string
  countryCode: CountryCode
  selectedCountry: CountryCode | null
  showCountries: boolean
  focused: boolean
}
