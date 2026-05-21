export default function Button({
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
  ariaLabel,
  ...props
}) {
  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 border-brand-500',
    secondary: 'bg-white text-ink-700 hover:bg-ink-50 border-ink-200',
    ghost: 'bg-transparent text-ink-600 hover:bg-ink-100 border-transparent',
  };

  const iconOnly = Icon && !children;

  return (
    <button
      className={[
        'inline-flex h-10 items-center justify-center gap-2 rounded-figma-md border px-4 text-sm font-semibold transition-colors',
        iconOnly ? 'w-10 px-0' : '',
        variants[variant],
        className,
      ].join(' ')}
      aria-label={ariaLabel}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
    </button>
  );
}
