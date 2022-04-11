import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { injected } from "../../connectors/connectors";
import useAuth from "../../hooks/useAuth";
import { ConnectorNames, connectorKey } from "../../connectors";
import { shortenAddress } from "../../utils/addressHelper";
import ConnectModal from "./ConnectModal";
import { useState } from "react";

const ConnectWallet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Open, setisOpen] = useState(false);
  const [showDisconnect, setShowDisconnect] = useState(false);
  const { account } = useWeb3React();

  const { login } = useAuth();

  const connectWallet = (connectorID: ConnectorNames) => {
    login(connectorID);
    window.localStorage.setItem(connectorKey, connectorID);
    // setDisplayNetwork(false);
  };

  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              _hover={{ bgColor: "#09292D" }}
              _active={{ bgColor: "#09292D" }}
              bgColor='#09292D'
              as={Button}
              onClick={
                account ? () => setShowDisconnect(true) : () => setisOpen(true)
              }
            >
              <Button bgColor='#09292D' w='100%'>
                <Text color='#55C388' fontSize='14px'>
                  {account ? shortenAddress(account) : "Connect wallet"}
                </Text>
              </Button>
            </MenuButton>
            <MenuList
              _hover={{ bgColor: "#09292D" }}
              _active={{ bgColor: "#09292D" }}
              bgColor='#09292D'
              display={account ? undefined : "none"}
            >
              <MenuItem
                _hover={{ bgColor: "#09292D" }}
                _active={{ bgColor: "#09292D" }}
                bgColor='#09292D'
              >
                Disconnect
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      {/* <Flex fontFamily='jakarta' w='100%' justifyContent='flex-end'>
        <Button
          onClick={
            account ? () => setShowDisconnect(true) : () => setisOpen(true)
          }
          bgColor='#09292D'
        >
          <Text color='#55C388' fontSize='14px'>
            {account ? shortenAddress(account) : "Connect wallet"}
          </Text>
        </Button>
        
      </Flex> */}
      <ConnectModal onClose={() => setisOpen(false)} isOpen={Open} />
    </>
  );
};

export default ConnectWallet;
