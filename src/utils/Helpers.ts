export function escapeRegExp(input: any) {
	const source = typeof input === 'string' || input instanceof String ? input : '';
	return source.replace(/[-[/\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}