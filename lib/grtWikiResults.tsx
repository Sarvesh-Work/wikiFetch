

export default async function grtWikiResults(searchTerm:string) {
  const searchParams= new URLSearchParams({
    action:'query',
    generator:'search',
    gsrsearch: searchTerm,
    gsrlimit:'20',
    prop:'pageiamges|extracts',
    exchars:'100',
    exintro:'true',
    explaintext:'true',
    exlimit:'max',
    format:'json',
    origin:'*' 
  })

  const response=await fetch('http://en.wikipedia.org/w/api.php?'+searchParams)
  
  return response.json()
}
