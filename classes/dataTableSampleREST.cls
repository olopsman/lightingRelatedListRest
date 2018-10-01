public class dataTableSampleREST {
    @AuraEnabled
    public static String getDocumentList() {
            String strEndPoint = 'https://www.google.com'; 
            HttpRequest req = new HttpRequest();
            req.setMethod('GET');
            req.setEndpoint(strEndPoint);

            Http h = new Http();
            system.debug('## => ' + req);
            HTTPResponse res = h.send(req);

            System.debug('## => ' + res.getBody());
            if (res.getStatusCode() == 200) {
                system.debug('## res.getBody() =>' + res.getBody());
                return res.getBody();
            }
        return null;

    }
}
