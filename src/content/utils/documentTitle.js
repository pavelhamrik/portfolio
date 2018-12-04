// @flow

import { SITE_NAME, SITE_SUBJECT } from '../../constants/constants';

export const updateDocTitle = ( pageTitle: string ) => {
    if (pageTitle) document.title = `${pageTitle} | ${SITE_NAME} • ${SITE_SUBJECT}`;
    else document.title = `${SITE_NAME} • ${SITE_SUBJECT}`;
};
