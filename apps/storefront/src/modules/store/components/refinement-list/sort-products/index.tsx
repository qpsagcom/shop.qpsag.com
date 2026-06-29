"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { t } from "@lib/i18n/translations"

export type SortOptions = "created_at" | "category"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  locale?: string
  "data-testid"?: string
}

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
  locale = "en",
}: SortProductsProps) => {
  const handleChange = (value: string) => {
    setQueryParams("sortBy", value as SortOptions)
  }

  const sortOptions = [
    { value: "created_at", label: t("store_sort_latest", locale) },
    { value: "category", label: t("store_sort_category", locale) },
  ]

  return (
    <FilterRadioGroup
      title={t("store_sort_by", locale)}
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default SortProducts
