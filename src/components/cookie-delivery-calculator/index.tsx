import { FC } from "react"

import  { type AllSettings } from "@/lib"

import { FormFields } from "./fields"
import { Results } from './results'

import styles from './styles.module.css'

type Props = AllSettings & {
  formAction(formData: FormData): void
}

export const CookieDeliveryCalculator: FC<Props> = ({ formAction, ...props }) => {
  return (
    <>
      <form action={formAction} className={styles.form}>
        <FormFields {...props} />
        <Results {...props} />
      </form>
    </>
  )
}