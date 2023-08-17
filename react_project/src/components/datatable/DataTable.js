import "./DataTable.css";

export default function DataTable({title, headers, entries}) {
    function PropsValid() {
        if (!headers || !entries || !Array.isArray(headers) || !Array.isArray(entries)) {
            return false;
        }
        for (const entry of entries) {
            if (!entry || !Array.isArray(entry) || entry.length !== headers.length) {
                return false;
            }
        }
        return true;
    }

    return (
        <div className="table-container">
            {PropsValid()
                ? <>
                    <h3>{title && title.length > 0 ? title : "Sans titre"}</h3>
                    <table>
                        <thead>
                        <tr>
                            {headers.map((header, idx) =>
                                <th key={"header" + idx}>{header}</th>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        {entries.map((entry, entryIdx) =>
                            <tr key={"entry" + entryIdx}>
                                {entry.map((cellContent, cellIdx) =>
                                    <td key={"entry" + entryIdx + "cell" + cellIdx}>{cellContent}</td>
                                )}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </>
                : <h3>Props invalides</h3>
            }
        </div>
    );
}
