export const onlyDigits = (str) => str.replace(/\D+/g, '')

export const removePrefix = (str, prefix) => {
  if (prefix && str.startsWith(prefix)) {
    return str.substr(prefix.length)
  }
  return str
}

export const removeSuffix = (str, suffix) => {
  if (suffix && str.endsWith(suffix)) {
    return str.slice(0, suffix.length * -1)
  }
  return str
}

export const parse = (str, { decimalSymbol, allowNegative = true } = {}) => {
  if (typeof str === 'number') {
    return str
  }
  if (str && typeof str === 'string' && str.trim().length) {
    const negative = str.startsWith('-') && allowNegative
    const numberParts = str.split(decimalSymbol)
    let number = onlyDigits(numberParts[0])
    if (negative) {
      number = '-' + number
    }
    if (numberParts.length === 2) {
      number += '.' + onlyDigits(numberParts[1])
    }
    if (number) {
      number = Number(number)
      return Number.isNaN(number) ? null : number
    }
  }
  return null
}

export const getCurrencyFormatConfig = ({ locale, currency, allowNegative = true } = {}) => {
  const numberFormat = new Intl.NumberFormat(locale, currency ? { style: 'currency', currency } : { minimumFractionDigits: 2 })
  const formattedNumber = numberFormat.format(1234)
  const decimalLimit = (formattedNumber.match(/0/g) || []).length
  const decimalSymbol = decimalLimit > 0 ? formattedNumber.substr(formattedNumber.indexOf('4') + 1, 1) : null
  const allowDecimal = decimalSymbol !== null
  const prefix = formattedNumber.substring(0, formattedNumber.indexOf('1'))
  const suffix = formattedNumber.substring(formattedNumber.lastIndexOf(decimalLimit > 0 ? '0' : '4') + 1)
  const thousandsSeparatorSymbol = formattedNumber.substr(formattedNumber.indexOf('1') + 1, 1)

  return {
    prefix,
    suffix,
    thousandsSeparatorSymbol,
    decimalSymbol,
    allowNegative,
    decimalLimit,
    allowDecimal
  }
}

export const getCaretPosition = (el, { prefix, thousandsSeparatorSymbol }) => {
  return Math.max(0,
    el.selectionStart -
    prefix.length -
    (el.value.substring(0, el.selectionStart).match(new RegExp(thousandsSeparatorSymbol === '.' ? '\\.' : thousandsSeparatorSymbol, 'g')) || []).length
  )
}
