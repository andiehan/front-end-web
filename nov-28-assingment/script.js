var client = contentful.createClient({
  space: 'z3l4v56i11dk',
  accessToken: 'sIsvtLmPF_wUTvpdDDEIVKMOkVqDnYRSzihP7hLFvf4',
});


client.getEntries().then(entries => {
    
    // log the title for all the entries that have it
    entries.items.forEach(entry => {
      console.log(entry);
    });

});