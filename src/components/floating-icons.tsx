import {
	SiBun,
	SiDocker,
	SiKubernetes,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiTypescript
} from '@icons-pack/react-simple-icons'
import { Cpu, Layers, Terminal } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconDefinition = {
	readonly id: string
	readonly Icon: ComponentType<SVGProps<SVGSVGElement>>
	readonly className: string
}

const floatingIcons: IconDefinition[] = [
	{
		id: 'react',
		Icon: SiReact,
		className: 'left-[8%] top-[10%] h-10 w-10 text-primary/25'
	},
	{
		id: 'typescript',
		Icon: SiTypescript,
		className: 'right-[12%] top-[14%] h-9 w-9 text-primary/22'
	},
	{
		id: 'docker',
		Icon: SiDocker,
		className: 'left-[10%] bottom-[18%] h-9 w-9 text-primary/22'
	},
	{
		id: 'postgresql',
		Icon: SiPostgresql,
		className: 'right-[12%] bottom-[16%] h-8 w-8 text-primary/20'
	},
	{
		id: 'redis',
		Icon: SiRedis,
		className: 'left-[4%] top-[52%] h-7 w-7 text-primary/18'
	},
	{
		id: 'bun',
		Icon: SiBun,
		className: 'right-[5%] top-[48%] h-7 w-7 text-primary/18'
	},
	{
		id: 'kubernetes',
		Icon: SiKubernetes,
		className: 'right-[26%] bottom-[38%] h-8 w-8 text-primary/20'
	},
	{
		id: 'terminal',
		Icon: Terminal,
		className: 'left-[22%] bottom-[34%] h-9 w-9 text-primary/20'
	},
	{
		id: 'cpu',
		Icon: Cpu,
		className: 'left-[18%] top-[36%] h-9 w-9 text-primary/16'
	},
	{
		id: 'layers',
		Icon: Layers,
		className: 'right-[30%] top-[40%] h-8 w-8 text-primary/18'
	}
]

export function FloatingIcons() {
	return (
		<div className="pointer-events-none fixed inset-0 z-[1] hidden overflow-hidden sm:block print:hidden">
			{floatingIcons.map(icon => (
				<icon.Icon key={icon.id} className={`absolute ${icon.className}`} aria-hidden="true" />
			))}
		</div>
	)
}
