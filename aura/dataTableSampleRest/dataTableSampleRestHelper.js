({
    fetchData: function (cmp) {
        var action = cmp.get('c.getDocumentList');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                if(JSON.parse(response.getReturnValue()) != null) {
                    var actions = [
                        { label: 'Download', name: 'download' },
                    ];
                    cmp.set('v.mycolumns', [
                        {
                            label: 'Date',
                            fieldName: 'Date',
                            type: 'date'
                        },
                        { label: 'Description', fieldName: 'Description', type: 'text'},
                        { label: 'FileName', fieldName: 'FileName', type: 'text'},
                        { type: 'action', typeAttributes: { rowActions: actions } }
                    ]);
                    cmp.set('v.mydata', JSON.parse(response.getReturnValue()));
                } else {
                    cmp.set("v.noResults", "No records to display");
                }
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
                cmp.set("v.noResults", "An error occurred: No records to display");
            }
        }));
        $A.enqueueAction(action);
    }
})