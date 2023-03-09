import { Box, Flex, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { AuthMenu } from '../AuthMenu/AuthMenu';

export const Header: FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
    >
      <Flex align="center">Geapp</Flex>
      <Box flexBasis="auto">
        <HStack spacing="24px">
          <AuthMenu />
          <LanguageSelector />
        </HStack>
      </Box>
    </Flex>
  );
};
