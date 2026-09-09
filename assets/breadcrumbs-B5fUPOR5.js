import{j as e}from"./chunk-62JRHF6Z-Dmcs-9-F.js";import{b as i}from"./Pagination-8r-Vbtkf.js";import"./index-DuUKZylE.js";let u={title:"Breadcrumbs",description:"Breadcrumbs (brødsmulesti) viser brukeren hvor de befinner seg i nettstedets hierarki og gjør det enkelt å navigere tilbake til høyere nivåer i strukturen.",icon:"/illustrations/breadcrumbs.svg"},c={contents:[{heading:"bruk-breadcrumbs-når",content:"du vil vise brukeren hvor de er i sidestrukturen"},{heading:"bruk-breadcrumbs-når",content:"brukeren skal kunne hoppe tilbake til et høyere nivå"},{heading:"unngå-breadcrumbs-når",content:"navigasjonen er lineær i steg eller prosesser (bruk StepList)"},{heading:"unngå-breadcrumbs-når",content:"løsningen kun har ett eller to nivåer — bruk i stedet en tilbakelenke"},{heading:"hvorfor-vi-anbefaler-dette",content:"Brødsmulestien hjelper brukeren å forstå hvor i hierarkiet de befinner seg og navigere opp i strukturen. På dype sider reduserer dette frafall og forvirring."},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi anbefaler ikke Breadcrumbs for korte stier (1–2 nivåer) fordi det gir liten navigasjonsverdi, men tar opp plass og legger til kognitivt innhold."},{heading:"hvorfor-vi-anbefaler-dette",content:"Breadcrumbs er navigasjon, ikke steg-oversikt — for steg-basert flyt brukes StepList, som kommuniserer fremdrift og har andre UU-krav."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"**Ingen varianter**"},{heading:"plassering-og-justering",content:"Breadcrumbs skal alltid ligge øverst på siden: rett under toppbanneret og over sidetittelen."},{heading:"plassering-og-justering",content:"På innloggede sider skal stien starte med *Min side*, deretter domenet og eventuelle undersider."},{heading:"plassering-og-justering",content:"Tilbakelenker på innloggede sider skal peke til hovedsiden for tjenesten, eller *Min side* dersom hovedside ikke finnes."},{heading:"plassering-og-justering",content:"Lange stier forkortes automatisk, men kan vises i full lengde ved å sette `shouldCollapse` til `false`."},{heading:"interaksjon-og-tilstander",content:"Brukeren kan utvide forkortet sti via ekspander-ikon."},{heading:"interaksjon-og-tilstander",content:"På mobil flyttes fokus til første brødsmule når full sti vises."},{heading:"tekst",content:"**Ingen egne språkføringer**"},{heading:"tilgjengelighet-uu-og-wcag",content:"Komponenten bruker `<nav>` og annonserer “Jeg er her” med riktig språk."},{heading:"tilgjengelighet-uu-og-wcag",content:'Siste element markeres som gjeldende side med `aria-current="page"`, med mulighet for å skru av mekanismen (`showLastItemAsCurrentPage`).'},{heading:"props",content:'<TypeTable of="Breadcrumbs" />'},{heading:"breadcrumbslist",content:'<TypeTable of="Breadcrumbs.List" />'},{heading:"breadcrumbsitem",content:'<TypeTable of="Breadcrumbs.Item" />'},{heading:"breadcrumbslink",content:'<TypeTable of="Breadcrumbs.Link" />'}],headings:[{id:"bruk-breadcrumbs-når",content:"Bruk Breadcrumbs når"},{id:"unngå-breadcrumbs-når",content:"Unngå Breadcrumbs når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"breadcrumbslist",content:"Breadcrumbs.List"},{id:"breadcrumbsitem",content:"Breadcrumbs.Item"},{id:"breadcrumbslink",content:"Breadcrumbs.Link"}]},h=[{depth:2,url:"#bruk-breadcrumbs-når",title:e.jsx(e.Fragment,{children:"Bruk Breadcrumbs når"})},{depth:2,url:"#unngå-breadcrumbs-når",title:e.jsx(e.Fragment,{children:"Unngå Breadcrumbs når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#breadcrumbslist",title:e.jsx(e.Fragment,{children:"Breadcrumbs.List"})},{depth:3,url:"#breadcrumbsitem",title:e.jsx(e.Fragment,{children:"Breadcrumbs.Item"})},{depth:3,url:"#breadcrumbslink",title:e.jsx(e.Fragment,{children:"Breadcrumbs.Link"})}];function d(n){const r={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...n.components},{Canvas:s,TypeTable:t}=r;return s||l("Canvas"),t||l("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(s,{examplesPath:"components/breadcrumbs"}),`
`,e.jsx(r.h2,{id:"bruk-breadcrumbs-når",children:"Bruk Breadcrumbs når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"du vil vise brukeren hvor de er i sidestrukturen"}),`
`,e.jsx(r.li,{children:"brukeren skal kunne hoppe tilbake til et høyere nivå"}),`
`]}),`
`,e.jsx(r.h2,{id:"unngå-breadcrumbs-når",children:"Unngå Breadcrumbs når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"navigasjonen er lineær i steg eller prosesser (bruk StepList)"}),`
`,e.jsx(r.li,{children:"løsningen kun har ett eller to nivåer — bruk i stedet en tilbakelenke"}),`
`]}),`
`,e.jsx(r.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Brødsmulestien hjelper brukeren å forstå hvor i hierarkiet de befinner seg og navigere opp i strukturen. På dype sider reduserer dette frafall og forvirring."}),`
`,e.jsx(r.li,{children:"Vi anbefaler ikke Breadcrumbs for korte stier (1–2 nivåer) fordi det gir liten navigasjonsverdi, men tar opp plass og legger til kognitivt innhold."}),`
`,e.jsx(r.li,{children:"Breadcrumbs er navigasjon, ikke steg-oversikt — for steg-basert flyt brukes StepList, som kommuniserer fremdrift og har andre UU-krav."}),`
`]}),`
`,e.jsx(r.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Ingen varianter"})}),`
`,e.jsx(r.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Breadcrumbs skal alltid ligge øverst på siden: rett under toppbanneret og over sidetittelen."}),`
`,e.jsxs(r.li,{children:["På innloggede sider skal stien starte med ",e.jsx(r.em,{children:"Min side"}),", deretter domenet og eventuelle undersider."]}),`
`,e.jsxs(r.li,{children:["Tilbakelenker på innloggede sider skal peke til hovedsiden for tjenesten, eller ",e.jsx(r.em,{children:"Min side"})," dersom hovedside ikke finnes."]}),`
`,e.jsxs(r.li,{children:["Lange stier forkortes automatisk, men kan vises i full lengde ved å sette ",e.jsx(r.code,{children:"shouldCollapse"})," til ",e.jsx(r.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(r.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Brukeren kan utvide forkortet sti via ekspander-ikon."}),`
`,e.jsx(r.li,{children:"På mobil flyttes fokus til første brødsmule når full sti vises."}),`
`]}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Ingen egne språkføringer"})}),`
`,e.jsx(r.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Komponenten bruker ",e.jsx(r.code,{children:"<nav>"})," og annonserer “Jeg er her” med riktig språk."]}),`
`,e.jsxs(r.li,{children:["Siste element markeres som gjeldende side med ",e.jsx(r.code,{children:'aria-current="page"'}),", med mulighet for å skru av mekanismen (",e.jsx(r.code,{children:"showLastItemAsCurrentPage"}),")."]}),`
`]}),`
`,`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(r.h3,{id:"breadcrumbslist",children:"Breadcrumbs.List"}),`
`,e.jsx(t,{of:i.List}),`
`,e.jsx(r.h3,{id:"breadcrumbsitem",children:"Breadcrumbs.Item"}),`
`,e.jsx(t,{of:i.Item}),`
`,e.jsx(r.h3,{id:"breadcrumbslink",children:"Breadcrumbs.Link"}),`
`,e.jsx(t,{of:i.Link})]})}function m(n={}){const{wrapper:r}=n.components||{};return r?e.jsx(r,{...n,children:e.jsx(d,{...n})}):d(n)}function l(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{m as default,u as frontmatter,c as structuredData,h as toc};
