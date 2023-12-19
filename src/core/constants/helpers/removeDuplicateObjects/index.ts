import { type TCriticalAnyType } from '@core/types/common/critical-any'

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function removeDuplicateObjects(arr: TCriticalAnyType) {
    if (arr) {
        const uniqueObjects: TCriticalAnyType = []
        const seenObjects: TCriticalAnyType = {}

        for (const obj of arr) {
            const objString = JSON.stringify(obj)
            if (!seenObjects[objString]) {
                seenObjects[objString] = true
                uniqueObjects.push(obj)
            }
        }

        return uniqueObjects
    }
}
