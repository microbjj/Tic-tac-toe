import { CellLayout } from "./CellLayout"

export function FieldLayout({ field, handleClickCell }) {
    return (
        <div className="grid grid-cols-3 grid-rows-3 w-full h-[448px]">
            {field.map((cell, index) => (
                <CellLayout
                    key={index}
                    handleClickCell={handleClickCell}
                    index={index}
                >
                    {cell}
                </CellLayout>
            ))}
        </div>
    )
}
