import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';

function TableHeading({
    name,
    sortable = true,
    sort_direction = null,
    sort_field = null,
    sortchange = () => {},
    children

}) {
    return (
        <th onClick={e => sortchange(name)} className="px-3 py-3">
            <div className="px-3 py-3 flex items-center justify-between cursor-pointer gap-1">
                {children}
                {sortable &&
                    <div>
                        <ChevronUpIcon className={
                            "w-4 "+
                            (sort_field === name && sort_direction === "asc"?
                                "text-white" : " "
                            )
                        } />
                        <ChevronDownIcon className={
                            "w-4 -mt-2 "+
                            (sort_field === name && sort_direction === "desc"?
                                "text-white" : " "
                            )
                        } />
                    </div>
                }
            </div>
        </th>
    )
}

export default TableHeading
