import DataTable from "../components/datatable/DataTable";

export default function TableView() {
    const headers = ["Nom", "Prenom"];
    const entriesArray = [
        ["GONZALEZ", "Antoine"],
        ["CORDIVAL", "Thomas"],
        ["OTTENS", "Kevin"],
    ];
    const entriesDict = {
        0: ["GONZALEZ", "Antoine"],
        1: ["CORDIVAL", "Thomas"],
        2: ["OTTENS", "Kevin"],
    };
    const entriesIncomplete = [
        ["GONZALEZ", "Antoine"],
        ["CORDIVAL"],
        ["OTTENS", "Kevin"],
    ];

    return (
        <>
            <h1>Tableau complet</h1>
            <DataTable title="Tableau 1" headers={headers} entries={entriesArray} />

            <h1>Tableaux sans titre</h1>
            <DataTable title="" headers={headers} entries={entriesArray} />

            <h1>Tableau avec props manquantes ou du mauvais type</h1>
            <DataTable entries={entriesArray} />
            <DataTable headers={headers} entries={entriesDict} />

            <h1>Tableau avec contenu invalide</h1>
            <DataTable headers={headers} entries={entriesIncomplete} />
        </>
    );
}
