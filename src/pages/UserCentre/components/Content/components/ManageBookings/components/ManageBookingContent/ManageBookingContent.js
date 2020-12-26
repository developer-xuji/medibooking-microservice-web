import React from "react";
import SearchAndSortBar from "./components/SearchAndSortBar";
import BookingList from "./components/BookingList";

class ManageBookingContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      sortMethod: "byDateNew",
    };
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  handleSortChange = (sortMethod) => {
    this.setState({
      sortMethod: sortMethod,
    });
  };

  render() {
    const { bookings } = this.props;
    return (
      <div>
        <SearchAndSortBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
          onSortChange={this.handleSortChange}
        />
        <BookingList
          bookings={bookings}
          filterText={this.state.filterText}
          sortMethod={this.state.sortMethod}
        />
      </div>
    );
  }
}

export default ManageBookingContent;
