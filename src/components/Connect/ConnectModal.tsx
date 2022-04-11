import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  Img,
  Input,
} from "@chakra-ui/react";
import METAMASK from "../../assets/metamask.svg";
import useAuth from "../../hooks/useAuth";
import { ConnectorNames, connectorKey } from "../../connectors";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const { login } = useAuth();

  const connectWallet = (connectorID: ConnectorNames) => {
    login(connectorID);
    window.localStorage.setItem(connectorKey, connectorID);

    // setDisplayNetwork(false);
    // onClose;
  };
  return (
    <>
      <Modal size='sm' onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bgColor='#0E162F'>
          <ModalBody py={{ base: 5 }}>
            <Flex alignItems='center'>
              <Text
                color='#EFF1F6'
                fontFamily='jakarta-bold'
                fontSize={{ base: "18px" }}
              >
                Connect wallet
              </Text>

              <ModalCloseButton mt={{ base: 2 }} />
            </Flex>
            <Flex
              onClick={() => {
                onClose();
                connectWallet(ConnectorNames.Injected);
              }}
              cursor='pointer'
              borderRadius='5px'
              bgColor='#101A37'
              mt={{ base: 5 }}
              p={{ base: 5 }}
              alignItems='center'
              justifyContent='space-between'
            >
              <Text fontSize='14px' color='#EFF1F6' fontFamily='jakarta-bold'>
                Metamask
              </Text>
              <Img src={METAMASK} />
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConnectModal;
