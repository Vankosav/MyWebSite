import Link from "next/link"

export default function CaseStudy({
title,
tags,
overview,
problem,
goals,
needs,
approach,
flow,
tools,
outcomes,
impact,
children
}) {

return (

<div className="min-h-screen bg-black text-white py-24 px-6 lg:px-24">

<Link
href="/#lxd-projects"
className="mb-20 inline-flex items-center gap-3 text-xl font-semibold text-gray-400 hover:text-white transition"
>
← Back to Learning Design Projects
</Link>

<article className="max-w-6xl mx-auto space-y-20">


{/* HERO */}

<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 lg:p-20 border border-white/10 shadow-2xl">

<h1 className="text-5xl lg:text-7xl font-black mb-10 leading-tight">
{title}
</h1>

{tags && (
<div className="flex flex-wrap gap-4 mt-6">

{tags.map((tag,i)=>(
<span
key={i}
className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold"
>
{tag}
</span>
))}

</div>
)}

</div>


{/* OVERVIEW */}

{overview && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Project Overview</h2>

{overview}

</section>

)}


{/* CUSTOM CONTENT (embeds etc) */}

{children}



{/* PROBLEM */}

{problem && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Problem</h2>

{problem}

</section>

)}


{/* GOALS */}

{goals && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Design Goals</h2>

<ul className="text-xl space-y-4 text-gray-200">

{goals.map((g,i)=>(

<li key={i}>• {g}</li>

))}

</ul>

</section>

)}


{/* NEEDS */}

{needs && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Needs Analysis</h2>

<ul className="text-xl space-y-4 text-gray-200">

{needs.map((n,i)=>(

<li key={i}>• {n}</li>

))}

</ul>

</section>

)}


{/* APPROACH */}

{approach && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Instructional Design Approach</h2>

{approach}

</section>

)}


{/* FLOW */}

{flow && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Learning Flow</h2>

<ul className="text-xl space-y-4 text-gray-200">

{flow.map((f,i)=>(

<li key={i}>• {f}</li>

))}

</ul>

</section>

)}


{/* TOOLS */}

{tools && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Tools</h2>

<div className="flex flex-wrap gap-4 text-lg">

{tools.map((tool,i)=>(

<span
key={i}
className="px-5 py-3 rounded-xl bg-white/10 border border-white/10"
>

{tool}

</span>

))}

</div>

</section>

)}


{/* OUTCOMES */}

{outcomes && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Learning Outcomes</h2>

<ul className="text-xl space-y-4 text-gray-200">

{outcomes.map((o,i)=>(

<li key={i}>• {o}</li>

))}

</ul>

</section>

)}


{/* IMPACT */}

{impact && (

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6">

<h2 className="text-3xl font-bold">Impact</h2>

{impact}

</section>

)}

</article>

</div>

)
}