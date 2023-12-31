import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { type TDataSocial } from '../types'

const calculator = (data: TCriticalAnyType = []) => {
    const convertRepData: TDataSocial[] = data?.map((itemsRep: TCriticalAnyType) => {
        return {
            avatarOwner: itemsRep?.owner?.avatar_url,
            name: itemsRep?.name,
            url: itemsRep?.html_url,
            clone_url: itemsRep?.clone_url,
            language: itemsRep?.language,
            watchers_count: itemsRep?.watchers_count,
            created_at: itemsRep?.created_at,
            updated_at: itemsRep?.updated_at,
            pushed_at: itemsRep?.pushed_at,
            topics: itemsRep.topics,
            forks: itemsRep.forks,
            homepageUrl: itemsRep.homepage,
            id: itemsRep?.id
        }
    })

    return { convertRepData }
}

export default calculator
