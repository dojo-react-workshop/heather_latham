function mergeMeetings(meetingTimeRanges) {
    meetingTimeRanges.sort((a, b) => a.startTime - b.startTime);

    return meetingTimeRanges.reduce((mergedMeetings, currentMeeting) => {
        if (mergedMeetings.length === 0) {
            mergedMeetings.push(currentMeeting);
            return mergedMeetings;
        }

        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        if (lastMergedMeeting.endTime >= currentMeeting.startTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
            // lastMergedMeeting.endTime = (lastMergedMeeting.endTime > currentMeeting.endTime) ? lastMergedMeeting.endTime : currentMeeting.endTime;
        } else {
            mergedMeetings.push(currentMeeting);
        }

        return mergedMeetings;
    }, []);
}