
/*
 * GET D3 demo graph page.
 */

exports.d3demoGet = function (req, res, commonHelper, personProvider, linkProvider) {
    personProvider.findAll(function (errorPeople, people) {
        if (errorPeople == null) {
            var peopleCount=people.length;
            var peopleJson = JSON.stringify(people);
            linkProvider.findAll(function (errorLinks, links) {
                if (errorLinks == null) {
                    var linksCount=links.length;
                    var linksJson = JSON.stringify(links);
                    res.render('d3demo', 
                    { 
                        peopleCount: peopleCount, 
                        people: peopleJson,  
                        linksCount: linksCount, 
                        links: linksJson  
                    });
                }
                else {
                    res.render('d3demo', 
                        { 
                            peopleCount: peopleCount, 
                            people: peopleJson,  
                            linksCount: 0, 
                            links: JSON.stringify([]),  
                        });
                }
            });
        }
        else {
            res.render('d3demo', 
                { 
                    peopleCount: 0, 
                    people: JSON.stringify([]),  
                    linksCount: 0, 
                    links: JSON.stringify([]),  
                });
        }
    });
};