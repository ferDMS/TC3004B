import Square from "../components/Square";

export default function Chess({ rows, cols }) {
    const rowsList = Array.from({ length: cols }, (_, i) => i);
    const colsList = Array.from({ length: rows }, (_, j) => j);

    return (
        <div className={`grid grid-cols-${cols}`}>
            {rowsList.map((row) =>
                colsList.map((col) =>
                    (row + col) % 2 === 1 ? (
                        <Square color="white"></Square>
                    ) : (
                        <Square color="black"></Square>
                    )
                )
            )}
        </div>

        // <div className="grid grid-cols-3 gap-4 p-4">
        //     <div>Column 1</div>
        //     <div>Column 2</div>
        //     <div>Column 3</div>
        //     <div>Column 4</div>
        // </div>
    );
}
