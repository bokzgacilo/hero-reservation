import { Button, Modal, ModalCloseButton, ModalContent, ModalOverlay, ModalHeader, ModalBody, Flex } from "@chakra-ui/react";
import moment from "moment"
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar"
import 'react-big-calendar/lib/css/react-big-calendar.css';



export default function BigCalendar(props){
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setSelectedDate(null);
    setIsOpen(false);
  };

  const localizer = momentLocalizer(moment)

  const handleSelectEvent = (event) => {
    alert(`Clicked event: ${event.title}`);
  };

  const handleSlotSelect = ({ start }) => {
    setSelectedDate(start);
    setIsOpen(true);
  }

  return(
    <>
      <Calendar 
        localizer={localizer}
        events={props.events}
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        selectable={true}
        onSelectSlot={handleSlotSelect}
      />

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{moment(selectedDate).format('MMMM DD, YYYY')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={4}>
            <Flex direction='row' gap={4}>
              <Button disabled colorScheme='blue'>Book Now!</Button>
              <Button onClick={handleClose}>Close</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    
  )
}