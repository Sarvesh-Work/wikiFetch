import grtWikiResults from "@/lib/grtWikiResults";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = grtWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.page;

  const content = (
    <main className=" bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? 
        Object.values(results).map((result,index) => {
          return <p key={index}>{JSON.stringify(result)}</p>;
        })
       : 
        <h2>{`${searchTerm} not found`}</h2>
      }
    </main>
  );
  return content;
}
