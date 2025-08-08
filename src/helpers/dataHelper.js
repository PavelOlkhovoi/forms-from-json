export const generateDefaultTableData = (takeInitialValue) => {
    const array = takeInitialValue.ar_bausteineArray.map(item => ({
      schluessel: item.infobaustein.schluessel,
      bezeichnung: item.infobaustein.bezeichnung,
      wert: null,
      pflichtfeld: false
    }))

    return {
        schluessel: takeInitialValue.schluessel,
        bezeichnung: takeInitialValue.bezeichnung,
        array,
    }
  }