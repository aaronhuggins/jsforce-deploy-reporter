public class AddressWrapper {
    public String streetAddress1 {get; private set;}
    public String streetAddress2 {get; private set;}
    public String city {get; private set;}
    public String state {get; private set;}
    public String postalCode {get; private set;}
    public String country {get; private set;}

    public AddressWrapper() {
        streetAddress1 = '';
        streetAddress2 = '';
        city = '';
        state = '';
        postalCode = '';
        country = '';
    }

    public AddressWrapper(String streetAddress1, String streetAddress2, String city, String state, String postalCode, String country, Boolean defaultToBlank) {
        if (defaultToBlank) {
            this.streetAddress1 = String.isEmpty(streetAddress1) ? '' : streetAddress1;
            this.streetAddress2 = String.isEmpty(streetAddress2) ? '' : streetAddress2;
            this.city = String.isEmpty(city) ? '' : city;
            this.state = String.isEmpty(state) ? '' : state;
            this.postalCode = String.isEmpty(postalCode) ? '' : postalCode;
            this.country = String.isEmpty(streetAddress1) ? '' : country;
        } else {
            this.streetAddress1 = streetAddress1;
            this.streetAddress2 = streetAddress2;
            this.city = city;
            this.state = state;
            this.postalCode = postalCode;
            this.country = country;
        }
    }
}