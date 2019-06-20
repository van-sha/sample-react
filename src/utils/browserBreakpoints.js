// NOTE: use the value at which the breakpoint ENDS. So, 1 less than the next breakpoint.
// eg. "if M2 starts at 480, then the value for M1 is 479."
const breakpoints = {
	m0: 359,	// 360 - 1
	m1: 479,	// 480 - 1
	m2: 567,	// 568 - 1
	m3: 639,	// 640 - 1
	t1: 767,	// 768 - 1
	t2: 859,	// 860 - 1
	t3: 959,	// 960 - 1
	d1: 1023,	// 1024 - 1
	d2: 1199,	// 1200 - 1
	d3: 10000,
};

function getLayoutStyle(browser) {
	if (browser.lessThan.t2) return 'mobile';
	if (browser.lessThan.d1) return 'tablet';
	return 'desktop';
}

export {
	breakpoints,
	getLayoutStyle,
};