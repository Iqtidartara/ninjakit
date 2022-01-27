import { MouseEventHandler, ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./input.module.css";

type Appearance = "filled" | "outlined";

export type InputProps = {
	/** @see https://material.io/design/components/text-fields.html */
	appearance?: Appearance;
	error?: ReactNode;
	flex?: boolean;
	helper?: ReactNode;
	id: string; // id required by label htmlFor
	label?: ReactNode;
	leadingIcon?: ReactNode;
	onClickTrailingIcon?: MouseEventHandler<HTMLButtonElement>;
	trailingIcon?: ReactNode;
};

export function useClassName({
	appearance = "filled",
	disabled,
	flex,
	error,
	leadingIcon,
	override,
	trailingIcon,
}: {
	appearance?: Appearance;
	disabled?: boolean;
	error?: ReactNode;
	flex?: boolean;
	leadingIcon?: ReactNode;
	override?: string;
	trailingIcon?: ReactNode;
}): string | undefined {
	return [
		flex ? styles.flex : undefined,
		leadingIcon ? styles.leadingIcon : undefined,
		override,
		styles.field,
		styles[appearance],
		trailingIcon ? styles.trailingIcon : undefined,
		typography.labelLarge,
		disabled ? styles.disabled : undefined,
		error ? styles.error : undefined,
	]
		.join(" ")
		.trim();
}

export { PasswordInput } from "./password";
export { TextInput } from "./text";
