import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Field from "./../form/Field";

export const MapContainer = ({
  google,
  address,
  setAddress,
  mapCenter,
  setMapCenter,
}) => {
  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);

        // update center state
        setMapCenter(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <div
      id="googleMaps"
      className="relative h-72 mb-8 w-11/12 mx-auto sm:w-full overflow-y-hidden"
    >
      <PlacesAutocomplete
        value={address}
        onChange={(value) => handleChange(value)}
        onSelect={(value) => handleSelect(value)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
              })}
              className="border-b-4 border-primary-jade w-full p-1 px-2 outline-none rounded-sm mb-4"
            />
            <div className="autocomplete-dropdown-container absolute top-10 z-30 flex flex-col w-full bg-white rounded shadow-lg">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                    className="block cursor-pointer w-full hover:bg-slate-100 hover:font-bold"
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <Map
        style={{
          overflow: "hidden",
          height: "250px",
          width: "100%",
        }}
        google={google}
        initialCenter={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
        center={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
        zoom={16}
      >
        <Marker
          position={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyChVyb2nPgMzs1jsi7c-2y_j7pMZw6YU-E",
})(MapContainer);
