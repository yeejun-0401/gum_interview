import { Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

export const useSpecialistActions = (isMember: boolean) => {
  const { i18n } = useTranslation();

  const handlePrimaryAction = () => {
    if (isMember) {
      // member: book appointment
      Linking.openURL('https://gainmiles.simplybook.asia/v2/');
    } else {
      // non-member:contact us
      const localePath = i18n.language.startsWith('zh') ? 'zh-HK' : 'en-HK';
      Linking.openURL(`https://www.gumhk.com/${localePath}/contact-us`);
    }
  };

  return {
    handlePrimaryAction,
    primaryButtonLabelKey: isMember ? 'buttons.book_appointment' : 'buttons.contact',
  };
};