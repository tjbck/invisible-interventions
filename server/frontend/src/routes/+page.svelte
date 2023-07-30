<script>
	import { v4 as uuidv4 } from 'uuid';

	import dayjs from 'dayjs';

	const submitHandler = () => {
		console.log(window);
		console.log(window.parent);
		parent.postMessage(JSON.stringify({ userId: uuidv4() }), '*');
	};

	let formData = {
		date: dayjs().format('YYYY-MM-DD'),
		participantNumber: '',
		age: '',
		gender: '', // 'M','F','N','OTHER','NA'
		race: [], // "B", "EA", "I-F", "I-M", "I-I", "I-OTHER", "I-NA", "L", "M", "SA", "W", "OTHER", "NA"
		incomeBracket: '', // "0", "10", "25", "50", "75", "100", "150", "NA"
		appUsageFrequency: '', // "1", "2", "3", "4"
		mindlessUsageFrequency: '', // "1", "2", "3", "4"
		averageMindlessUsageDurationMinutes: '',
		socialMediaHealthImpact: '', // "1", "2", "3"
		addictionStatus: null // true, false
	};
</script>

<div class="mx-4 mb-20">
	<div class="">
		<div class="flex justify-center">
			<img src="/sfu.png" alt="sfu logo" />
		</div>
		<div class="text-xl text-gray-600 font-semibold">Pre-Experiment Survey</div>
		<div class="mt-2 text-sm text-gray-600 break-words">
			Comparing Invisible Interventions with Empowering Interventions: How Can Reduced Visibility or
			Enhanced Agency allow Users to Take Control of their Social Media Usage?
		</div>
	</div>

	<hr class="my-6" />

	<form on:submit|preventDefault={submitHandler}>
		<div class=" my-6">
			<label for="date" class="block mb-2 text-sm text-gray-900">Date</label>
			<input
				disabled
				type="date"
				id="date"
				bind:value={formData.date}
				class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"
				required
			/>
		</div>

		<div class=" my-6">
			<label for="participant-number" class="block mb-2 text-sm text-gray-900"
				>Participant #
			</label>
			<input
				type="text"
				id="participant-number"
				bind:value={formData.participantNumber}
				class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"
				placeholder="Your participant #"
				required
				autocomplete="off"
			/>
			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>

		<div class=" my-6">
			<label for="age" class="block mb-2 text-sm text-gray-900">Age</label>
			<input
				type="number"
				id="age"
				bind:value={formData.age}
				min="0"
				class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"
				placeholder="Your age"
				required
				autocomplete="off"
			/>
			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>

		<div class=" my-6">
			<label for="gender" class="block mb-2 text-sm text-gray-900">Gender</label>
			<div id="gender" class="mt-5">
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.gender}
						value={'M'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Man</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.gender}
						value={'F'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Woman</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.gender}
						value={'N'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Non-binary</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.gender}
						value={'O'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Other</div>
				</div>
				<div class="flex items-center">
					<input
						type="radio"
						bind:group={formData.gender}
						value={'NA'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Prefer not to answer</div>
				</div>
			</div>

			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>

		<div class=" my-6">
			<label for="race" class="block mb-2 text-sm text-gray-900"
				>What is your race?<br /> (One or more categories may be selected)
			</label>

			<div id="race" class="mt-5">
				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'B'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Black</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'EA'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">East/Southeast Asian</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'I'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Indigenous</div>
				</div>

				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'L'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Latino</div>
				</div>

				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'M'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Middle Eastern</div>
				</div>

				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'SA'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">South Asian</div>
				</div>

				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'W'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">White</div>
				</div>

				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'O'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Other</div>
				</div>

				<div class="flex items-center mb-2">
					<input
						type="checkbox"
						bind:group={formData.race}
						value={'NA'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Prefer not to say</div>
				</div>
			</div>

			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>

		<div class=" my-6">
			<label for="income-bracket" class="block mb-2 text-sm text-gray-900"
				>Which of these describes your income last year?
			</label>
			<div id="income-bracket" class="mt-5">
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.incomeBracket}
						value={'0'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">$0 to $9,999</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.incomeBracket}
						value={'10'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">$10,000 to $24,999</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.incomeBracket}
						value={'25'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">$25,000 to 49,999</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.incomeBracket}
						value={'50'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">$50,000 to 74,999</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.incomeBracket}
						value={'75'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">$75,000 to 99,999</div>
				</div>

				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.incomeBracket}
						value={'100'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">$100,000 to 149,999</div>
				</div>

				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.incomeBracket}
						value={'150'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">$150,000 and greater</div>
				</div>

				<div class="flex items-center">
					<input
						type="radio"
						bind:group={formData.incomeBracket}
						value={'NA'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Prefer not to answer</div>
				</div>
			</div>
			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>

		<div class=" my-6">
			<label for="app-usage-frequency" class="block mb-2 text-sm text-gray-900"
				>How often do you use TikTok?
			</label>
			<div id="app-usage-frequency" class="mt-5">
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.appUsageFrequency}
						value={'1'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Never</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.appUsageFrequency}
						value={'2'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Infrequently</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.appUsageFrequency}
						value={'3'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">A moderate amount</div>
				</div>
				<div class="flex items-center">
					<input
						type="radio"
						bind:group={formData.appUsageFrequency}
						value={'4'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Frequently</div>
				</div>
			</div>
			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>
		<div class=" my-6">
			<label for="mindless-usage-frequency" class="block mb-2 text-sm text-gray-900"
				>How often do you catch yourself mindlessly consuming content on TikTok without being aware
				of what you are doing?
			</label>
			<div id="mindless-usage-frequency" class="mt-5">
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.mindlessUsageFrequency}
						value={'1'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Never</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.mindlessUsageFrequency}
						value={'2'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Infrequently</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.mindlessUsageFrequency}
						value={'3'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">A moderate amount</div>
				</div>
				<div class="flex items-center">
					<input
						type="radio"
						bind:group={formData.mindlessUsageFrequency}
						value={'4'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Frequently</div>
				</div>
			</div>
			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>
		<div class=" my-6">
			<label for="average-mindless-usage-duration-minutes" class="block mb-2 text-sm text-gray-900"
				>On average, how long do these sessions of mindless consumption last?</label
			>
			<input
				type="number"
				id="average-mindless-usage-duration-minutes"
				bind:value={formData.averageMindlessUsageDurationMinutes}
				class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"
				placeholder="Duration minutes"
				min="0"
				required
				autocomplete="off"
			/>
			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>

		<div class=" my-6">
			<label for="social-media-health-impact" class="block mb-2 text-sm text-gray-900"
				>How do you feel your social media usage affects your physical and mental health and
				well-being?</label
			>
			<div id="social-media-health-impact" class="mt-5">
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.socialMediaHealthImpact}
						value={'1'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">
						Social media positively affects my health
					</div>
				</div>
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.socialMediaHealthImpact}
						value={'2'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">
						Social media has no effect on my health
					</div>
				</div>
				<div class="flex items-center">
					<input
						type="radio"
						bind:group={formData.socialMediaHealthImpact}
						value={'3'}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">
						Social media negatively affects my health
					</div>
				</div>
			</div>
			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>
		<div class=" my-6">
			<label for="addiction-status" class="block mb-2 text-sm text-gray-900"
				>Would you consider yourself addicted to TikTok?</label
			>

			<div id="addiction-status" class="mt-5">
				<div class="flex items-center mb-2">
					<input
						type="radio"
						bind:group={formData.addictionStatus}
						value={true}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">Yes</div>
				</div>
				<div class="flex items-center">
					<input
						type="radio"
						bind:group={formData.addictionStatus}
						value={false}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						required
					/>
					<div class="ml-2 text-sm font-medium text-gray-700">No</div>
				</div>
			</div>

			<div class="mt-2 text-xs text-gray-500 text-right">
				<span>REQUIRED</span>
			</div>
		</div>

		<hr />

		<div class=" my-6">
			<div class=" text-gray-600 text-sm">
				If you would like to reschedule or cancel your participation in the study for any reason,
				please notify the student lead (kkazemi@sfu.ca) or the principle investigator
				(lawkim@sfu.ca).
			</div>
		</div>

		<hr />

		<div class="flex justify-end my-6">
			<div>
				<button
					class="flex text-sm w-full font-normal rounded-lg py-1.5 px-3 bg-blue-500 hover:bg-blue-600 text-white transition-all cursor-pointer"
					type="submit"
				>
					<div class="">Submit</div>

					<div class="my-auto ml-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path
								d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"
							/>
						</svg>
					</div>
				</button>

				<!-- <button
                        type="submit"
                        class="mt-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                        >Submit</button
                    > -->
			</div>
		</div>

		<div class="text-white">
			<div class="mt-2 text-sm break-words">{JSON.stringify(formData)}</div>
		</div>
	</form>
</div>