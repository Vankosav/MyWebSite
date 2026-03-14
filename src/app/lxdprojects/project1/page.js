import CaseStudy from "@/components/CaseStudy"

export default function Project1() {

  return (

<CaseStudy

title="Translating Reports to Identify and Remove Barriers to Learning"

tags={[
"Instructor-Led Workshop",
"Professional Development"
]}

overview={
<>
<p className="text-xl text-gray-200">
Teachers frequently receive detailed medical and psychoeducational reports but struggle to translate diagnostic information into actionable classroom accommodations.
</p>

<p className="text-xl text-gray-200">
This workshop helps educators interpret assessment data functionally and connect it to meaningful classroom supports aligned with institutional policy.
</p>
</>
}

problem={
<p className="text-xl text-gray-200">
Teachers often receive lengthy psychoeducational reports but lack clear guidance on how to translate technical findings into classroom accommodations.
</p>
}

goals={[
"Interpret assessment reports through a functional learning lens",
"Translate learning needs into classroom accommodations",
"Support consistent documentation and decision-making"
]}

needs={[
"Teachers uncertain about policy requirements",
"Difficulty identifying relevant data in lengthy reports",
"Lack of structured translation from report → classroom support"
]}

approach={
<p className="text-xl text-gray-200">
The workshop integrates adult learning principles and experiential learning. Participants actively practice interpreting reports and making accommodation decisions.
</p>
}

flow={[
"Anchor decisions in policy",
"Read reports through a functional learning lens",
"Translate needs into accommodations",
"Document accommodations clearly",
"Reflect on classroom impact"
]}

tools={[
"Genially",
"Google Docs",
"Google Sheets",
"Padlet"
]}

outcomes={[
"Identify functional barriers in reports",
"Link needs to classroom accommodations",
"Document accommodations clearly",
"Apply consistent professional judgment"
]}

impact={
<p className="text-xl text-gray-200">
Teachers reported increased confidence interpreting reports and implementing accommodations. The workshop also improved consistency of documentation across teams.
</p>
}

>

{/* OVDE IDE GENIALLY */}

<section className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-8">

<h2 className="text-3xl font-bold">Interactive Workshop Preview</h2>

<div className="rounded-2xl overflow-hidden border border-white/10">

<iframe
src="https://view.genially.com/698b245d666c8733e7cc2ef5/interactive-content-translating-reports-to-identify-and-remove-barriers-to-learning"
width="100%"
height="650"
allowFullScreen
className="w-full"
/>

</div>

</section>

</CaseStudy>

  )
}