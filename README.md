# VueJS 3 pour un developpeur React

## Code example:

### 0 - Initialisation via "quick-start"

- Vue: `npm create vue@latest`
    - Setup CLI avec plusieurs options de generation (typescript, eslint, framework de tests...).
    - Projet hello world d'example.
    - 139 packages (56Mo), 0 vulnerabilites.
    - Build: 88K

- React: `npx create-react-app <name>`
    - Generation directe sans options.
    - Projet hello world d'example.
    - 1508 packages (1511 avec react-router-dom, 432Mo), 6 vulnerabilites "high-severity".
    - Build 948K

### 1 - Bases: navbar, routing

- Les deux frameworks permettent le Lazy-loading par defaut, React est moins pratique a gerer dans certains cas mais il existe des bibliotheques qui ameliorent cet aspect.

- Vue:
    - Routeur initialise dans le projet d'example si l'option est selectionnee dans le quick start
    - Initialisation via `app.use(<routeur>)` dans `main.js`, avec `<routeur>` le resultat d'un appel a `createRouter()` dans lequel les routes sont detaillees
    - Navigation via composant `<RouterLink>`
    - Le composant correspondant a la route actuelle s'obtient via le composant `<RouterView />`

- React:
    - Routeur necessitant le package `react-router-dom` non-inclus dans la base produite par `create-react-app`
    - Initialisation via rendering du composant `<Routes>` dans la vue, contenant la definition de chaque `<Route>` en enfant
    - Navigation via composant `<Link>`
    - Le composant correspondant a la route actuelle s'obtient via le composant `<Outlet />`

### 2 - VueJS: Options API vs Composition API

- Deux styles de scripting

- Memes capacites: l'Options API est construite sur la Composition API

- Options API plus structuree mais verbose, centree instance (beaucoup d'acces a `this`)

- Composition API plus flexible et proche du React, centree composition (duh), cad declaration de morceaux de state dans un scope et les combiner pour gerer la complexite

- Composition API plus poussee, semble etre l'option privilegiee sur le long terme, mais beaucoup d'existant utilise l'Options API donc il faut savoir comprendre les deux

- Reste de cette demo en Composition API (et en fonctionnel pour React)

### 3 - Props et rendering dynamique

- Props en read-only, attributs du prop accessibles (donc mutable indirectement) dans les deux cas.

- Vue:
    - Possibilite de preciser le type d'un prop, s'il est required, et un validator simple
        - Message console en cas de prop invalide, mais pas d'effet de bord, le prop continuera d'exister dans le code, handling manuel necessaire comme en react
    - Separation script / template: afficher une liste se fait par un tag particulier sur une balise (`v-for`), meme principe pour le rendering conditionnel (`v-if` et `v-else`)
    - Passage statique: `prop=valeur`, passage dynamique: `:prop="javascript"` ou `v-bind:prop="javascript"`

- React:
    - Sans typescript, peu de controle sur la validation ou le type souhaite
    - JSX: melange de script et de balises, afficher une liste revient a iterer dessus en javascript et return la balise correspondante a chaque element, le rendering conditionnel est un test qui retourne une balise
    - Passage statique: `prop=valeur`, passage dynamique: `prop={javascript}`

### 4 - State, Bindings et mutations du state (Formulaire)

- Vue:
    - Un state reactif se declare avec `state = ref(defaultValue)`
    - Une valeur calculee se definit avec `result = computed(() => state.value === null ? "vide" : "non vide")
    - Dans le `<script>` on accede au state avec `state.value` / `state.value = newValue`, dans la template avec `state` / `state = newValue`
    - `v-model="state"` s'occupe d'afficher le contenu du state dans l'input et de le mettre a jour si necessaire. S'adapte au type d'input: `value/onInput` pour du texte, `checked/onCheck` pour une checkbox, etc.
    - On peut reagir au changement du state avec `watch(state, (newValue, oldValue) => {...})`. Depuis Vue3 il est egalement possible de watch plusieurs sources a partir du meme handler: `watch([a, b], ([newA, newB], [oldA, oldB]) => {...})`

- React:
    - Un state reactif se declare avec `[state, setState] = useState(defaultValue)`
    - Une valeur calculee se definit telle-quelle ou avec `useMemo(() => calculComplexe(state), [state])`
    - On accede au state via `state` (immutable) et on le met a jour via `setState(newValue)`
    - Il n'y a pas de binding bi-directionnel, il faut necessairement passer par le setter pour modifier le state. Il faut donc preciser pour chaque input `value={state} onChange={e => setState(e.target.value)}` ou equivalent selon le type d'input.
    - On peut reagir au changement du state avec `useEffect(() => {...}, [state])`. Il est possible d'observer plusieurs variables avec le meme `useEffect` mais on ne peut pas garder l'information de la valeur avant changement sans implementer un hook custom.

### 5 - Dev tools

- Base similaire: arbre des composants et inspection/edition de leurs props et state
- Vue propose plus d'informations sur les composants comme les fonctions internes, les listeners, le nom des variables en state, etc
- React propose un profiler permettant d'effectuer des captures pour obtenir un flame graph, Vue propose une timeline en temps reel de tous les evenements souris/clavier/composant et leur impact en performance

### 6 - Scoped CSS

- Vue:
    - Comportement disponible par defaut en Vue.js: ajouter `scoped` a la balise `<style>` du fichier .vue
    - Un style `scoped` d'un composant s'appliquera aussi a tous ses composants enfants
    - Utiliser des classes reste meilleur pour les performances de l'application que de laisser des elements HTML tels quels dans un style scoped.

- React:
    - Par defaut, tous les CSS sont merges tels quels lors du build. A partir du moment ou un CSS est importe dans un composant inclus dans le build, il sera applique a tout le code.
    - Plusieurs manieres de gerer ce probleme: utilisation de CSS Modules (resultat proche du comportement de Vue, mais a ecrire explicitement, webpack doit etre config pour l'accepter), utilisation d'une bibliotheque "css-in-js" comme styled-components ou emotion (objectivement hideux et illisible, melange html + js + css dans le meme morceau de code), usage explicite de classes/ids et de div "containers" autour des composants (plus verbeux)


---

## Autres notes:

- Equivalences React vs Vue
    - props
        - en parametre de la fonction-composant vs `defineProps()`
    - state
        - `useState()` vs `ref()`
    - reactivite
        - `useEffect()` vs `watch()`
    - hooks de lifecycle
        - [Difficile avec la version fonctionnelle de React](https://medium.com/@tgholami/react-function-components-lifecycle-8a6ede4b8c2e), acces direct aux hooks avec Vue
    - dynamic rendering
        - `{list.map((elt, idx) => <component props={elt} key={idx}>}` vs `<component v-for="elt in list" :props="elt">`
        - `{condition && <component>}` vs `<component v-if="condition">`
        - `{condition ? <component1> : <component2>}` vs `<component1 v-if="condition"><component2 v-else>`
    - children components
        - `{children}` vs `<slots />`

- Equivalences de bibliotheques courantes en React
    - react-router -> vue-router
        - Fonctionnement tres proche, navigation un peu differente (pour vue, plus proche de `window.history` que de `useNavigate()`
    - Redux (lib externe) -> Pinia (anciennement Vuex)
        - Fonctionnement tres proche, Pinia moins laborieux d'apres internet (pas test)
    - react-query -> vue-query
        - Les deux reposent sur TanStack Query, donc meme fonctionnement
    - Scoped CSS (CSS Modules, Emotion, Styled Components...)
        - Bibliotheque + configuration du bundler necessaire en React, Fonctionnement par defaut en Vue
    - React Developer Tools -> Vue.js devtools
