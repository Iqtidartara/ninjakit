import { Card, Checkbox, useHashRef } from "ninjakit";

import styles from "../examples.module.css";
import { CheckboxState, useButtonState } from "./state";

export function CheckboxExample() {
	const hashRef = useHashRef({ id: "checkbox" });
	const state = useButtonState();
	const [{ disabled, indeterminate, labelWithJSX }] = state;

	return (
		<Card appearance="elevated" id="checkbox" ref={hashRef} title="Checkbox">
			<section>
				<section className={styles.center}>
					<Checkbox
						disabled={disabled}
						indeterminate={indeterminate}
						label={
							labelWithJSX ? (
								<span>
									Label <strong>with node</strong>
								</span>
							) : (
								"Label"
							)
						}
					/>
				</section>
				<CheckboxState state={state} />
			</section>
		</Card>
	);
}