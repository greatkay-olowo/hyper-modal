import * as React from 'react'
import { IARIAProps } from '../../types'

import styles from './style.scss'

export interface IDefaultModalContentProps {
  ariaEnabled?: boolean;
  ariaProps?: IARIAProps;
  handleClose: () => void;
}

export const DefaultModalContent = (props: IDefaultModalContentProps) => {
  const { ariaEnabled, ariaProps, handleClose } = props
  const labelId = ariaEnabled && ariaProps
    ? ariaProps['aria-labelledby']
    : undefined
  const descriptionId = ariaEnabled && ariaProps
    ? ariaProps['aria-describedby']
    : undefined

  return (
    <div className={styles.hyperModalDefaultContent}>
      <div className={styles.title} id={labelId}>Hyper modal</div>
      <div className={styles.description} id={descriptionId}>
        Fully customizable and accessible modal
      </div>
      <button type="button" onClick={handleClose}>Close modal</button>
    </div>
  )
}

export default DefaultModalContent
