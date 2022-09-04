import {useMemo} from 'react';

export function useSearchData(data: any[] = [], searchTerm?: string): any[] {
  const filteredData = useMemo(() => {
    return data.filter((row: any) => {
      if (!searchTerm) {
        return true;
      }

      let hasMatch = false;

      Object.keys(row).forEach((rowHeader: any) => {
        if (row?.[rowHeader]?.toString()?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
          hasMatch = true;
        }
      })

      return hasMatch;
    })
  }, [data, searchTerm]);

  return filteredData;
}
