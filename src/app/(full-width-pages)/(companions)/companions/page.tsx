import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import CompanionCard from "@/components/ui/companion-components/CompanionCard";
import SearchCompanionsInput from "@/components/ui/companion-components/SearchCompanionsInput";
import SubjectFilter from "@/components/ui/companion-components/SubjectFilter";


const CompanionsLibrary = async ({ searchParams}: SearchParams) => {
  const filters = await searchParams
  const subject = filters.subject ? filters.subject : ''
  const topic = filters.topic ? filters.topic : ''

  const companions = await getAllCompanions({ subject, topic })

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1 className="text-sm font-semibold">Companions Library</h1>
        <div className="flex gap-4">
          <SearchCompanionsInput/>
          <SubjectFilter/>
        </div>
      </section>
      <section className="flex flex-wrap">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  )
}
export default CompanionsLibrary