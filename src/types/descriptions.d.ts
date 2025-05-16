export interface DescriptionsSchema {
  span?: number
  field: string
  label?: string
  mappedField?: string
  width?: string | number
  minWidth?: string | number
  align?: 'left' | 'center' | 'right'
  labelAlign?: 'left' | 'center' | 'right'
  className?: string
  labelClassName?: string
  dateFormat?: string
  dictType?: string
}
