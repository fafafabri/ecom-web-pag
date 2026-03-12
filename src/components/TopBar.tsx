import { MapPin, Clock } from 'lucide-react';

const socials = [
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'Facebook', icon: 'f', href: '#' },
  { label: 'X', icon: '𝕏', href: '#' },
  { label: 'Instagram', icon: '◻', href: '#' },
];

const TopBar = () => (
  <div className="w-full bg-secondary text-foreground text-sm hidden lg:block border-b border-border">
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-destructive" />
          <span className="text-xs">
            Valle Hermoso El Arenal, Mz. M Lote 6 <strong>Puente Piedra</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs">
            Horario Atención <strong>Lun a Vie:</strong> 8am – 5:30pm <strong>Sab</strong> 8:00 am a 12:30pm
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-7 h-7 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold hover:opacity-80 transition-opacity"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopBar;
