import React from "react";
import BookingItem from "./components/BookingItem";
const role = localStorage.getItem("ROLE");
class BookingList extends React.Component {
  render() {
    // const filterText = this.props.filterText;
    // const sortMethod = this.props.sortMethod;
    const { filterText, sortMethod, bookings } = this.props;
    let listAfterSearch = [];
    const rows = [];

    if (role === "ROLE_PATIENT") {
      listAfterSearch = bookings.filter(({ doctorName }) =>
        doctorName.toLowerCase().includes(filterText.toLowerCase())
      );
    } else {
      listAfterSearch = bookings.filter(({ patientName }) =>
        patientName.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    // console.log(bookings);
    // const listAfterSearch = bookings.filter(({ doctorName, patientName }) => {
    //   role === "patient"
    //     ? doctorName.toLowerCase().includes(filterText.toLowerCase())
    //     : patientName.toLowerCase().includes(filterText.toLowerCase());
    // });
    // const listAfterSearch = bookings.filter(({ doctorName }) =>
    //   doctorName.toLowerCase().includes(filterText.toLowerCase())
    // );

    if (sortMethod === "byName") {
      role === "ROLE_PATIENT"
        ? listAfterSearch.sort((a, b) =>
            a.doctorName.localeCompare(b.doctorName)
          )
        : listAfterSearch.sort((a, b) =>
            a.patientName.localeCompare(b.patientName)
          );
    }
    if (sortMethod === "byDateNew") {
      listAfterSearch.sort((a, b) => b.date.localeCompare(a.date));
    }
    if (sortMethod === "byDateOld") {
      listAfterSearch.sort((a, b) => a.date.localeCompare(b.date));
    }

    console.log(listAfterSearch);
    return listAfterSearch.map((booking) => (
      <BookingItem
        // name={booking.doctorName}
        // icon={booking.icon}
        // date={booking.date}
        // specialisation={booking.specialisation}
        // startingTime={booking.startingTime}
        // endingTime={booking.endingTime}
        // notes={booking.notes}
        key={booking.id}
        booking={booking}
      />
    ));
  }
}
export default BookingList;
