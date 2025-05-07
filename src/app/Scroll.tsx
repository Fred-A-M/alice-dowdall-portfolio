'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Scroll() {
	// when clicking a link, user will not scroll to the top of the page if the header is sticky.
	// their current scroll position will persist to the next page.
	// this useEffect is a workaround to 'fix' that behavior.

	const pathname = usePathname();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return <></>;
}